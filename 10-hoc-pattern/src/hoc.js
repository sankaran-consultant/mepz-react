


import React from 'react';
import store from './store'

export function connect(InputComponent, mapStateToProps) {

    class Container extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                data: mapStateToProps(store.getState())
            }
        }
        componentDidMount() {
            //..
            store.subscribe(() => { })
        }

        componentWillUnmount() {
            //..
            store.unsubscribe();
        }

        handleLogic() {
            //
        }

        render() {
            return (
                <div>
                    <InputComponent data={this.state.data} />
                </div>
            )
        }
    }

    Container.displayName = `connect <${InputComponent.name}>`

    return Container;

}