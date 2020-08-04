import React from 'react';

export default class CreateGame extends React.Component {
    state = {
        title: "",
        developer: "",
        platforms: [ "" ]
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/games`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(this.state)
        }).then(response => response.json())
          .then(data => console.log(data))
          .then(() => {
              this.setState({
                  title: "",
                  developer: "",
                  platforms: [""]
              })
          }).then(this.props.refresh)
    }
    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value });
    }
    handlePlatformsChange = (event, index) => {
        const updatedPlatforms = this.state.platforms.concat([]);
        updatedPlatforms[index] = event.target.value;
        this.setState({platforms: updatedPlatforms});
    }
    addPlatform = (event) => {
        const newPlatforms = this.state.platforms.concat([ "" ]);
        this.setState({platforms:newPlatforms});
    }
    removePlatform = (index) => {
        const newPlatforms = this.state.platforms.concat([]);
        newPlatforms.splice(index, 1);
        this.setState({ platforms: newPlatforms });
    }
    render(){
        const platformInputs = this.state.platforms.map((platform, index) => {
            return (
                <div>
                    <input name={index}
                        type="text"
                        // placeholder="Platform"
                        placeholder={`Platform ${index + 1}`}
                        value={platform}
                        onChange={(event) => this.handlePlatformsChange(event, index)} 
                        required/>
                    <input className="remove-platform"
                        type="button"
                        value="-"
                        onClick={()=> this.removePlatform(index)}/>
                </div>
                
            )
        })
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="title"
                    type="text"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    required/>
                <input name="developer"
                    type="text"
                    placeholder="Developer"
                    value={this.state.developer}
                    onChange={this.handleChange}/>
                {platformInputs}
                <input id="add_platform" 
                    type="button" 
                    value="Add Platform"
                    onClick={this.addPlatform}/>
                <input type="submit" value="Add Game"/>
            </form>
        )
    }
}