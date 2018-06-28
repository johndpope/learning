class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount(){
        const stringCount = localStorage.getItem('counter');
        if (!isNaN(stringCount)) {
            const count = parseInt(stringCount, 10);
            this.setState(() => ({ count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('counter',this.state.count);
            console.log('updated counter');
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        this.setState((prevState) => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1> Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>    
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCountApp();
// };
// const minusOne = () => {
//     count--;
//     renderCountApp();
// };
// const reset = () => {
//     count = 0; 
//     renderCountApp();
// };

// const renderCountApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>resest</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo,appRoot);
// };

// renderCountApp();