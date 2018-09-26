class Prelude {
  constructor() {
    this._waiters = []
    this.loaded = false
    this.dom = null

    if ( document.readyState !== 'loading' ) Prelude._buildPrelude( this )
    else window.addEventListener( 'DOMContentLoaded', () => Prelude._buildPrelude( this ) )
  }

  ready( waiter ) {
    this.loaded ? waiter( this ) : this._waiters.push( waiter )
  }

  on( element, eventName, handle ) {
    element.addEventListener( eventName, handle )
  }

  static _buildPrelude( instance ) {
    let dom = {}

    function trace( element ) {
      if ( element.children.length ) Array.from( element.children ).forEach( child => {
        trace( child )
        if ( child.id ) {
          let mangledName = child.id.replace( /-(.)/g, ( whole, letter ) => letter.toUpperCase() )
          dom[ mangledName ] = child
        }
      })
    }

    trace( document.body )
    instance._complete( dom )
  }

  _complete( dom ) {
    this.dom = dom
    this.loaded = true
    this._waiters.forEach( waiter => waiter( this ) )
    this._waiters = []
  }
}

class StateMachine {
  constructor() {
    this._watched = {}
    this.props = {}
  }

  batch( stateInfo ) {
    let controllers = []

    Object.keys( stateInfo ).forEach( handle => {
      // Set all of our values first
      this.props[ handle ] = stateInfo[ handle ]

      // Gather unique controllers. If a single controller is registered for multiple
      // handles, we have no need to call it multiple times. Once will do.
      this._watched[ handle ].forEach( controller => {
        if ( !controllers.includes( controller ) ) controllers.push( controller )
      })
    })

    controllers.forEach( controller => {
      let values = controller._handles.map( () => this.props[ name ] )
      controller( ...values )
    })
  }

  controller( handles, control ) {
    control._handles = handles
    handles.forEach( handle => {
      if ( this._watched[ handle ] ) this._watched[ handle ].push( control )
      else {
        this.props[ handle ] = this[ handle ]
        this._watched[ handle ] = [ control ]
        Object.defineProperty( this, handle, {
          get() { return this.props[ handle ] },
          set( value ) {
            this._watched[ handle ].forEach( controller => {
              let values = controller._handles.map( name => name === handle ? value : this.props[ name ] )
              controller( ...values )
            })
            this.props[ handle ] = value
          }
        })

        this[ handle ] = this.props[ handle ]
      }
    })
  }
}

// module.exports.Prelude = Prelude
// module.exports.StateMachine = StateMachine
