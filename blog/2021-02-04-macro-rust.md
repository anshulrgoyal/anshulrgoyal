---
slug: macro-rust
title: "An intro to macros in rust"
author: Anshul Goyal
author_url: https://github.com/anshulrgoyal
author_image_url: /img/anshul.jpg
tags: [rust, macro]
image: https://blog.logrocket.com/wp-content/uploads/2021/02/Screen-Shot-2021-02-02-at-10.39.25-AM.png
---

Rust has an excellent support for macros. Macros are a way of writing code that writes other code, which is known as metaprogramming. Macros provide functionality similar to functions, without the runtime cost associated with functions. Since macros are expanded during the compile time so some compile-time costs are associated with macros. Macros in rust are very different from the ones used in C. Rust macros are applied to the token tree whereas C macros are text substitution.
<!--truncate-->
# Types of macros

Rust has two types of macros:

- *declarative macros*
- *procedural macros*
# Declarative Macros

These macros are declared using `macro_rules!`. Declarative macros are a bit less powerful but provide an easy to use interface for creating macros to remove duplicate code. One of the common declarative macro is `println!`. Declarative macros provide a `match` like an interface where on match the macro is replaced with code inside the matched arm.

## Creating Declarative Macros
    // use macro_rules! <name of macro>{<Body>}
    macro_rules! add{
     // macth like arm for macro
        ($a:expr,$b:expr)=>{
     // macro expand to this code
            {
    // $a and $b will be templated using the value/variable provided to macro
                $a+$b
            }
        }
    }
    
    fn main(){
     // call to macro, $a=1 and $b=2
        add!(1,2);
    }

This code creates a macro to add two numbers. `macro_rules!` are used with the name of the macro "add" and the body of the macro. The macro doesn’t add two numbers, it just replaces itself with the code to add two numbers. Each arm of macro takes an argument for functions and multiple types can be assigned to arguments. If the add function can also take a single argument then we add another arm.


    macro_rules! add{
     // first arm match add!(1,2), add!(2,3) etc
        ($a:expr,$b:expr)=>{
            {
                $a+$b
            }
        };
    // Second arm macth add!(1), add!(2) etc
        ($a:expr)=>{
            {
                $a
            }
        }
    }
    
    fn main(){
    // call the macro
        let x=0;
        add!(1,2);
        add!(x);
    }

There can be multiple branches in a single macro expanding to different code based on different arguments. Each branch can take multiple arguments starting with the `$` sign and followed by a token type.

- `item`: an item, like a function, struct, module, etc.
- `block`: a block (i.e. a block of statements and/or an expression, surrounded by braces)
- `stmt`: a statement
- `pat`: a pattern
- `expr`: an expression
- `ty`: a type
- `ident`: an identifier
- `path`: a path (e.g. `foo`, `::std::mem::replace`, `transmute::<_, int>`, …)
- `meta`: a meta item; the things that go inside `#[...]` and `#![...]` attributes
- `tt`: a single token tree
- `vis`: a possibly empty *Visibility* qualifier

In the example, we use the `$typ` argument with token type `ty` as a datatype like `u8`, `u16` etc. This macro converts to a particular type before adding the numbers.


    macro_rules! add_as{
    // using a ty token type for macthing types passed to maccro
        ($a:expr,$b:expr,$typ:ty)=>{
            $a as $typ + $b as $typ
        }
    }
    
    fn main(){
        println!("{}",add_as!(0,2,u8));
    }

Macros also support taking non fixed number of arguments. The operators are very similar to the regular expression. `*` is used for zero or more token types and `+` for zero or one argument.


    macro_rules! add_as{
        (
      // repeated block
      $($a:expr)
     // seperator
       ,
    // zero or more
       *
       )=>{
           { 
       // to handle the case without any arguments
       0
       // block to be repeated
       $(+$a)*
         }
        }
    }
    
    fn main(){
        println!("{}",add_as!(1,2,3,4)); // => println!("{}",{0+1+2+3+4})
    }

The token type that repeats is enclosed in `$()` followed by a separator and a `*` or `+` indicating the number of times the token will repeat. The separator is used to distinguish the token from each other. `$()` block followed by `*` or `+` is used to indicate the repeating block of code. In the above example, `+$a` is a repeating code.

If you look closely, you will notice an additional zero is added to the code to make the syntax valid. To remove this zero and make the add expression the same as the argument, we need to create a new macro known as TT muncher.


    macro_rules! add{
     // first arm in case of single argument and last remaining variable/number
        ($a:expr)=>{
            $a
        };
    // second arm in case of two arument are passed and stop recursion in case of odd number ofarguments
        ($a:expr,$b:expr)=>{
            {
                $a+$b
            }
        };
    // add the number and the result of remaining arguments 
        ($a:expr,$($b:tt)*)=>{
           {
               $a+add!($($b)*)
           }
        }
    }
    
    fn main(){
        println!("{}",add!(1,2,3,4));
    }

The TT muncher processes each token separately in a recursive fashion. It is easier to process a single token at a time. The macro has three arms. The first arms handle the case when a single argument is passed, the second one handles the case when two arguments are passed and the third arm calls the `add` macro again with the rest of the arguments.

The macro arguments don’t need to be comma-separated. Multiple tokens can be used with different token types. For eg., brackets can be used with `ident` token type. The Rust compiler will take the matched arm and extract the variable from the argument string.


    macro_rules! ok_or_return{
    // match something(q,r,t,6,7,8) etc
    // compiler extracts function name and arguments. It injects the values in respective varibles.
        ($a:ident($($b:tt)*))=>{
           {
            match $a($($b)*) {
                Ok(value)=>value,
                Err(err)=>{
                    return Err(err);
                }
            }
            }
        };
    }
    
    fn some_work(i:i64,j:i64)->Result<(i64,i64),String>{
        if i+j>2 {
            Ok((i,j))
        } else {
            Err("error".to_owned())
        }
    }
    
    fn main()->Result<(),String>{
        ok_or_return!(some_work(1,4));
        ok_or_return!(some_work(1,0));
        Ok(())
    }

`ok_or_return` macro returns the function if an operation returns `Err` or the value of an operation returns `Ok`. It takes a function as an argument and executes it inside a match statement. For arguments passed to function, it uses repetition.

Sometimes few macros need to be grouped into a single macro. In that case, internal macro rules are used. It helps to manipulate the macro inputs and write clean TT munchers. For creating an internal rule, add the rule name starting with `@` as the argument. Now the macro will never match for an internal rule until explicitly specified as an argument.


    macro_rules! ok_or_return{
     // internal rule.
        (@error $a:ident,$($b:tt)* )=>{
            {
            match $a($($b)*) {
                Ok(value)=>value,
                Err(err)=>{
                    return Err(err);
                }
            }
            }
        };
    
    // public rule can be called by the user.
        ($a:ident($($b:tt)*))=>{
            ok_or_return!(@error $a,$($b)*)
        };
    }
    
    fn some_work(i:i64,j:i64)->Result<(i64,i64),String>{
        if i+j>2 {
            Ok((i,j))
        } else {
            Err("error".to_owned())
        }
    }
    
    fn main()->Result<(),String>{
       // instead of round bracket curly brackets can also be used
        ok_or_return!{some_work(1,4)};
        ok_or_return!(some_work(1,0));
        Ok(())
    }


## Using Declarative Macros for more advanced parsing

Often macros perform some task that requires parsing of rust language itself. Let's create a macro that makes struct public by suffixing the `pub` keyword. It will sum up all the knowledge we have gathered until now in this article.

First, we need to parse the rust struct to get the name of the struct, fields of the struct, and field type.

**Parsing the name and field of struct**
A `struct` declaration has a visibility keyword at the start (like `pub`) followed by the `struct` keyword and then the name of the `struct` and the body of the `struct`.

![](https://paper-attachments.dropbox.com/s_FF6F5912049FBF771235F34EC177AEC60D1A4D88404944221274BA302586323D_1609351688370_Struct.png)

    macro_rules! make_public{
        (
      // use vis type for visibility keyword and ident for struct name
         $vis:vis struct $struct_name:ident { }
        ) => {
            {
                pub struct $struct_name{ }
            }
        }
    }

The `$vis` will have visibility and `$struct_name` will have a struct name. For making a struct public, we just need to add the `pub` keyword and ignore the `$vis` variable.


![](https://paper-attachments.dropbox.com/s_FF6F5912049FBF771235F34EC177AEC60D1A4D88404944221274BA302586323D_1609357470638_Struct4.png)


A `struct` may contain multiple fields with the same or different data types and visibility. `ty` token type is used for the data type, `vis` for visibility, and `ident` for the field name. We will use `*` repetition for zero or more fields.


     macro_rules! make_public{
        (
         $vis:vis struct $struct_name:ident {
            $(
     // vis for field visibility, ident for field name and ty for field data type
            $field_vis:vis $field_name:ident : $field_type:ty
            ),*
        }
        ) => {
            {
                pub struct $struct_name{
                    $(
                    pub $field_name : $field_type,
                    )*
                }
            }
        }
    }

**Parsing Metadata from the** `**struct**`

Often the `struct` has some metadata attached or procedural macros like `#[derive(Debug)]`. This metadata needs to stay intact. So parsing this metadata is done using the `meta` type.


    macro_rules! make_public{
        (
         // meta data about struct
         $(#[$meta:meta])* 
         $vis:vis struct $struct_name:ident {
            $(
            // meta data about field
            $(#[$field_meta:meta])*
            $field_vis:vis $field_name:ident : $field_type:ty
            ),*$(,)+
        }
        ) => {
            { 
                $(#[$meta])*
                pub struct $struct_name{
                    $(
                    $(#[$field_meta:meta])*
                    pub $field_name : $field_type,
                    )*
                }
            }
        }
    }

Our `make_public` macro is ready now. To see how `make_public` works let's use [Rust Playground](https://play.rust-lang.org/) to expand the macro to the actual code that is compiled.


    macro_rules! make_public{
        (
         $(#[$meta:meta])* 
         $vis:vis struct $struct_name:ident {
            $(
            $(#[$field_meta:meta])*
            $field_vis:vis $field_name:ident : $field_type:ty
            ),*$(,)+
        }
        ) => {
    
                $(#[$meta])*
                pub struct $struct_name{
                    $(
                    $(#[$field_meta:meta])*
                    pub $field_name : $field_type,
                    )*
                }
        }
    }
    
    fn main(){
        make_public!{
            #[derive(Debug)]
            struct Name{
                n:i64,
                t:i64,
                g:i64,
            }
        }
    }

The expanded code looks like this.


    // some imports
    
    
    macro_rules! make_public {
        ($ (#[$ meta : meta]) * $ vis : vis struct $ struct_name : ident
         {
             $
             ($ (#[$ field_meta : meta]) * $ field_vis : vis $ field_name : ident
              : $ field_type : ty), * $ (,) +
         }) =>
        {
    
                $ (#[$ meta]) * pub struct $ struct_name
                {
                    $
                    ($ (#[$ field_meta : meta]) * pub $ field_name : $
                     field_type,) *
                }
        }
    }
    
    fn main() {
            pub struct name {
                pub n: i64,
                pub t: i64,
                pub g: i64,
        }
    }
## Limitation of Declarative Macros

Declarative Macros have a few limitations. Some are related to macros themselves others are more specific to Declarative Macros.

1. Most IDEs don’t have good support for macros auto-completion and expansion.
2. Debugging declarative macros is difficult.
3. Limited modification capability of declarative macros.
4. Macros can result in larger binaries.
5. Longer compile time.
# Procedural Macros

Procedural macros are a more advanced version of macros. Procedural macros allow expanding the existing syntax of rust. It takes arbitrary input and returns valid rust code.
The procedural macros are functions that take a `TokenStream` as input and return another `T``oken``Stream`. The procedural macros manipulate the input `TokenStream` to produce an output stream.

## Types of Procedural Macros
- Attribute like macros
- Derive macros
- Function like macros
## Attribute like macros

An attribute like macros allows the creating of a custom attribute that attaches itself to an Item and allows manipulation of that Item. It can also take arguments.


    #[some_attribute_macro(some_argument)]
    fn perform_task(){
    // some code
    }

In the above code, `some_attribute_macros` is an attribute macro. It manipulates the function `perform_task`.

**Writing attribute like macro**
Start by creating a project using `cargo new macro-demo` `--``lib`. Once the project is ready to update the `Cargo.toml` to notify cargo the project will create procedural macros.


    # Cargo.toml
    [lib]
    proc-macro = true

Now we are all set to venture into procedural macros.

Procedural macros are public functions that take `TokenStream` as input and return another `TokenStream`. For writing procedural macro, we need to write our parser to parse `TokenStream`. Rust community has a very good crate `syn` for parsing `TokenStream`.

`syn` provides a ready-made parser for Rustlang syntax that can be used to parse `TokenStream`. You can also parse your syntax by combining low-level parsers providing `syn`.

Add `syn` and `quote` to `Cargo.toml`


    # Cargo.toml
    [dependencies]
    syn = {version="1.0.57",features=["full","fold"]}
    quote = "1.0.8"

Now we can write an attribute like a macro in `lib.rs` using the `proc_macro` crate provided by the compiler for writing procedural macros. A procedural macro crate cannot export anything else other than procedural macros and procedural macros defined in the crate can’t be used in the crate itself.


    // lib.rs
    extern crate proc_macro;
    use proc_macro::{TokenStream};
    use quote::{quote};
    
    // using proc_macro_attribute to declare an attribute like procedural macro
    #[proc_macro_attribute]
    // _metadata is argument provided to macro call and _input is code to which attribute like macro attaches
    pub fn my_custom_attribute(_metadata: TokenStream, _input: TokenStream) -> TokenStream {
        // returing a simple TokenStream for Struct
        TokenStream::from(quote!{struct H{}})
    }

To test the macro we added, create an ingratiation test by creating a folder named `tests` and adding file `attribute_macro.rs` in the folder. Now in this file, we can use our attribute like a macro for testing.


    // tests/attribute_macro.rs
    
    use macro_demo::*;
    
    // macro converts struct S to struct H
    #[my_custom_attribute]
    struct S{}
    
    #[test]
    fn test_macro(){
    // due to macro we have struct H in scope
        let demo=H{};
    }

Run the above test using the `cargo test` command.
Now that we have some knowledge of procedural macros, lets use `syn` for some advance `TokenStream` manipulation and parsing.

For learning how `syn` is used for parsing and manipulation, let's take an example of `syn` [repo](https://github.com/dtolnay/syn/blob/master/examples/trace-var/trace-var/src/lib.rs). This example creates a macro that trace variables when value changes.

First, we need to identify how our macro will manipulate the code it attaches.


    #[trace_vars(a)]
    fn do_something(){
      let a=9;
      a=6;
      a=0;
    }

The `trace_vars` macro takes the name of the variable it needs to trace and injects a print statement each time the value of the input variable i.e `a` changes. It tracks the value of input variables.

First, parse the code to which the attribute like macro attaches. `syn` provides an inbuilt parser for Rust function syntax. `ItemFn` will parse the function and throw an error if the syntax is invalid.


    #[proc_macro_attribute]
    pub fn trace_vars(_metadata: TokenStream, input: TokenStream) -> TokenStream {
    // parsing rust function to easy to use struct
        let input_fn = parse_macro_input!(input as ItemFn);
        TokenStream::from(quote!{fn dummy(){}})
    }

Now we have the parsed `input` so let's move to `metadata`. For `metadata` , no inbuilt parser will work, we will have to write one ourselves for it, using `syn`'s `parse` module.


    #[trace_vars(a,c,b)] // we need to parse a "," seperated list of tokens
    // code

For `syn` to work, we need to implement the `Parse` trait provided by `syn`. `Punctuated` is used to create a `vector` of `Indent` separated by `,`.


    struct Args{
        vars:HashSet<Ident>
    }
    
    impl Parse for Args{
        fn parse(input: ParseStream) -> Result<Self> {
            // parses a,b,c, or a,b,c where a,b and c are Indent
            let vars = Punctuated::<Ident, Token![,]>::parse_terminated(input)?;
            Ok(Args {
                vars: vars.into_iter().collect(),
            })
        }
    }

Once we implement `Parse` trait we can use `parse_macro_input` macro for parsing `metadata`.


    #[proc_macro_attribute]
    pub fn trace_vars(metadata: TokenStream, input: TokenStream) -> TokenStream {
        let input_fn = parse_macro_input!(input as ItemFn);
    // using newly created struct Args
        let args= parse_macro_input!(metadata as Args);
        TokenStream::from(quote!{fn dummy(){}})
    }

We will now modify the `input_fn` to add `println!` when the variable changes the value. For adding, we need to filter outlines that have an assignment and insert a print statement after that line.


    impl Args {
        fn should_print_expr(&self, e: &Expr) -> bool {
            match *e {
                Expr::Path(ref e) => {
     // variable shouldn't start wiht ::
                    if e.path.leading_colon.is_some() {
                        false
    // should be a single variable like `x=8` not n::x=0 
                    } else if e.path.segments.len() != 1 {
                        false
                    } else {
    // get the first part
                        let first = e.path.segments.first().unwrap();
    // check if the variable name is in the Args.vars hashset
                        self.vars.contains(&first.ident) && first.arguments.is_empty()
                    }
                }
                _ => false,
            }
        }
    
    // used for checking if to print let i=0 etc or not
        fn should_print_pat(&self, p: &Pat) -> bool {
            match p {
    // check if variable name is present in set
                Pat::Ident(ref p) => self.vars.contains(&p.ident),
                _ => false,
            }
        }
    
    // manipulate tree to insert print statement
        fn assign_and_print(&mut self, left: Expr, op: &dyn ToTokens, right: Expr) -> Expr {
     // recurive call on right of the assigment statement
            let right = fold::fold_expr(self, right);
    // returning manipulated sub-tree
            parse_quote!({
                #left #op #right;
                println!(concat!(stringify!(#left), " = {:?}"), #left);
            })
        }
    
    // manipulating let statement
        fn let_and_print(&mut self, local: Local) -> Stmt {
            let Local { pat, init, .. } = local;
            let init = self.fold_expr(*init.unwrap().1);
    // get the variable name of assigned variable
            let ident = match pat {
                Pat::Ident(ref p) => &p.ident,
                _ => unreachable!(),
            };
    // new sub tree
            parse_quote! {
                let #pat = {
                    #[allow(unused_mut)]
                    let #pat = #init;
                    println!(concat!(stringify!(#ident), " = {:?}"), #ident);
                    #ident
                };
            }
        }
    }

In the above example, the `quote` macro is used for template and writing Rust. `#` is used for injecting the value of the variable.

Now we will do a DFS over `input_fn` and insert the print statement. `syn` provides a `Fold` trait that can be implemented for DFS over any `Item`. We just need to modify the trait methods corresponding to the Token type we want to manipulate.


    impl Fold for Args {
        fn fold_expr(&mut self, e: Expr) -> Expr {
            match e {
    // for changing assignment like a=5
                Expr::Assign(e) => {
    // check should print
                    if self.should_print_expr(&e.left) {
                        self.assign_and_print(*e.left, &e.eq_token, *e.right)
                    } else {
    // continue with default travesal using default methods
                        Expr::Assign(fold::fold_expr_assign(self, e))
                    }
                }
    // for changing assigment and operation like a+=1
                Expr::AssignOp(e) => {
    // check should print
                    if self.should_print_expr(&e.left) {
                        self.assign_and_print(*e.left, &e.op, *e.right)
                    } else {
    // continue with default behaviour
                        Expr::AssignOp(fold::fold_expr_assign_op(self, e))
                    }
                }
    // continue with default behaviour for rest of expressions
                _ => fold::fold_expr(self, e),
            }
        }
    
    // for let statements like let d=9
        fn fold_stmt(&mut self, s: Stmt) -> Stmt {
            match s {
                Stmt::Local(s) => {
                    if s.init.is_some() && self.should_print_pat(&s.pat) {
                        self.let_and_print(s)
                    } else {
                        Stmt::Local(fold::fold_local(self, s))
                    }
                }
                _ => fold::fold_stmt(self, s),
            }
        }
    }

`Fold` trait is used to do a DFS of `Item`. It allows using different behavior for various Token types.
Now we can use `fold_item_fn` to inject print statements in our parsed code.


    #[proc_macro_attribute]
    pub fn trace_var(args: TokenStream, input: TokenStream) -> TokenStream {
    // parse the input
        let input = parse_macro_input!(input as ItemFn);
    // parse the arguments
        let mut args = parse_macro_input!(args as Args);
    // create the ouput
        let output = args.fold_item_fn(input);
    // return the TokenStream
        TokenStream::from(quote!(#output))
    }

**Note: This code example is from** `***syn***` ******[***examples***](https://github.com/dtolnay/syn/blob/master/examples/trace-var/trace-var/src/lib.rs)***. It is a very good resource to learn about procedural macros.***

## Custom Derive Macros

Custom derive macros allow auto implement traits. These macro allow to implement trait using `#[derive(Trait)]`. `syn` has excellent support for `derive` macros.


    #[derive(Trait)]
    struct MyStruct{}

**Writing Custom Derive Macros** 
We will use `DeriveInput` for parsing input to derive macro. We will also use the `proc_macro_derive` macro for defining a custom derive macro.


    #[proc_macro_derive(Trait)]
    pub fn derive_trait(input: proc_macro::TokenStream) -> proc_macro::TokenStream {
        let input = parse_macro_input!(input as DeriveInput);
    
        let name = input.ident;
    
        let expanded = quote! {
            impl Trait for #name {
                fn print(&self) -> usize {
                    println!("{}","hello from #name")
               }
            }
        };
    
        proc_macro::TokenStream::from(expanded)
    }

More advanced procedural macros can be written using `syn` check out this example from `syn`'s [repo.](https://github.com/dtolnay/syn/blob/master/examples/heapsize/heapsize_derive/src/lib.rs)

## Function Like Macro

Function-like macros are similar to declarative macros in the way that they are invoked with the macro invocation operator `!` and look like function calls. They operate on the code that is inside the parentheses.

**Writing Function like macro**

    #[proc_macro]
    pub fn a_proc_macro(_input: TokenStream) -> TokenStream {
        TokenStream::from(quote!(
                fn anwser()->i32{
                    5
                }
    ))
    }

Functions like macro are not executed at runtime but at compile time. It can be used anywhere in code. It also takes a `TokenStream` and returns `TokenStream`.

## Advantage of procedural macros
- Better error handling using `span`
- Good control over output
- Good community built crates `syn` and `quote`
- It is more powerful than declarative macros.
# Conclusion

In this piece, we learned about macros and different types of macros with the basics of writing both types of macros using various syntax and community built crates. We also learned the advantage of each type of macros.

