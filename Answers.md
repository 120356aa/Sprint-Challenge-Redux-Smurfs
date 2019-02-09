1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Map, concat, slice

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store is the global state, actions are basically commands that get passed to reducers to do things.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is state that is the same across the whole app while component state only exists for that one component.
    Component state is usefull for things like form input while app state is used to control the entire app.

1.  What is middleware?

    Middleware is a middle man for the actions > reducers. " actions > middleware > reducers

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Thunk alows us to use redux in an async way

1.  Which `react-redux` method links up our `components` with our `redux store`?

    Connect
