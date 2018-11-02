let styles = [ 'background-color: #000000; color: white',
               'background-color: #e78686',
               'background-color: #e7c686',
               'background-color: #dfe786',
               'background-color: #86e78d',
               'background-color: #86e7e4',
               'background-color: #9186e7',
               'background-color: #6657c6',
               'background-color: #1400ff',
               'background-color: #e786d7' ]

window.addEventListener( 'DOMContentLoaded', () => {
  let source = document.querySelector( '#test-source' )
  let fills = Array.from( document.querySelectorAll( '.test-fill' ) )

  styles.forEach( style => {
    let container = document.createElement( 'section' )
    container.innerHTML = source.innerHTML
    container.style = style
    document.body.appendChild( container )
  })
})
