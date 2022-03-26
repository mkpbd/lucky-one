const question = [

    {
        question: 'How react works ?',
        answear: `React basically maintain a tree fo us.
        This tree is able do efficient diff computations one the nodes.
        we can think HTML Code as a tree. In fact that is exactly how the browser treats our DOM 
        Our rendered HTML ON the browser. 
        React allows our to effectively re-construct our DOM in JavaScript and push only those changes to the DOM 
        Which has actually occurred.
        There's nothing like JSX neither to JavaScript nor to the browser.
        JSX is simply syntactic sugar for creating very specific JavaScript object

        `,
        diff:[]
    },

    {
        question: 'Props vs State ?',
        answear: ` The State represents parts of an Application that can change.
        Each component can have its State. The state is Mutable and It is local to the component only.
        Props are read-only components. It is an Object which stores the value of attributes of a tag and work similar to the HTML attributes. it allows passing data
        from one component to other components. It is similar to function arguments.
        and can be passed to the component the same way as arguments passed in a function. Props are immutable so we can cannot modify the props from inside the component
        
        `,
        diff:[" Props are read-only  State changes can be asynchronous Prop",
            "Props are immutable. State is mutable",
            "Props can be accessed by the child component  State can not be accessed by child component"
            ,"Props are use to communicate between Component  Stateless components can not have State",
            "Props Make Components reuseable State cannot make components reuseable ",
            
    ]
        
    },

    {
        question: 'How does the useState Hook work?',
        answear: ` useState is a Hook that allows us to have state variables in functional components.
        We pass the initial state to this function and it returns a variable with the current state value and another function to update this value.
        Functional component are functions that just accept arguments as the properties of the component and return valid JSX
        As state previously useState enables you to add state to function components. Calling React.useState inside a function component
        generates as single piece of state associated with that component
        The useState Hook allows us to declare only one state variable
        `

        `,
        diff:[]
    },

]