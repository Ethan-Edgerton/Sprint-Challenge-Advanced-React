- [ ] Why would you use class component over function components (removing hooks from the question)?
        Functional components don't use React Lifecycle, State or Render methods. They are more "basic"
        Class components use "stateful" logic, React Lifecycle and Render methods. They also can pass props using the this.props

- [ ] Name three lifecycle methods and their purposes.
        Mounting- Uses constructor to add to UI, but waits for componentDidMount to run before Update starts.
        Updating- Updates the DOM with new UI. Waits for componentDidUpdate.
        Unmounting- removes unused UI elements from DOM.

- [ ] What is the purpose of a custom hook?
        Custom Hooks allow for more DRY and versatile/re-usable code.

- [ ] Why is it important to test our apps?
     Testing is important to make sure all elements work well on their own, and together without any issues while also making it much easier to diagnose and fix bugs.

