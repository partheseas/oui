window.addEventListener( 'DOMContentLoaded', () => {
  let source = document.querySelector( '#test-source' )
  let fills = Array.from( document.querySelectorAll( '.test-fill' ) )

  fills.forEach( container => {
    container.innerHTML = source.innerHTML
  })
})
