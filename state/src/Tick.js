import React from "react"

class Tick extends React.Component {
    constructor() {
        super()
        this.state = {
            seconds: 0
        }
        this.startCounting = this.startCounting.bind(this)
    }

    startCounting() {
        this.setState((prevState) => {
            return {
                seconds: prevState.seconds + 1
            }
        })
    }

    // Runs after the first render() lifecycle
    componentDidMount() {
        this.interval = setInterval(() => this.startCounting(), 1000);
      }

    render() {
        return(
            <div>
                <p>This app is {this.state.seconds} seconds old!</p>
            </div>
        )
    }

}

export default Tick