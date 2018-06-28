class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility(){
        this.setState((prevState) => { 
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render(){
        return (
            <div>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Details Here.</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
// console.log('App.js is running');

// const app = {
//     title: 'Visbility Toggle',
//     button: false,
//     buttonName: 'Show Details',
//     message: null
// }
// const appRoot = document.getElementById('app');

// const showDetails = () => {
//     app.button = !app.button;
//     app.buttonName = (app.button ? 'Hide Details' : 'Show Details');
//     app.message = (app.button ? <p>Here are your details</p> : null);
//     renderTemplate();
// };

// const renderTemplate = () => {
//     const template = (
//     <div>
//         <h1>{app.title}</h1>
//         <button onClick={showDetails}>{app.buttonName}</button>
//         {app.message}
//     </div>
//     );
//     ReactDOM.render(template,appRoot);
// };

// renderTemplate();