

codument.addEventListener('keydown', function(event){
    console.log(`Key pressed: ${event.key}`);
    if (event.key === 'Escape'){
        console.log('Escape Key was pressed.');
    }
})