function addItem() {

    const textarea = document.getElementById('todoText');
    // write your solution here
    createDIV(textarea.value);

    document.getElementById('todoText').value = '';
}

function createDIV(text)
{
    let insertText = new String(text);

    var block_to_insert_1 ;
    var block_to_insert_2 ;
    var block_to_insert_3 ;
    var container_block ;
    
    block_to_insert_1 = document.createElement( 'div' );
    block_to_insert_1.className = 'col-md-6 col-xxl-4';    
    
    block_to_insert_2 = document.createElement( 'div' );
    block_to_insert_2.className = 'card';

    block_to_insert_3 = document.createElement( 'div' );
    block_to_insert_3.className = 'card-body';
    block_to_insert_3.innerHTML = insertText;
    
    container_block = document.getElementById( 'itemList' );

    block_to_insert_2.appendChild( block_to_insert_3 );
    block_to_insert_1.appendChild( block_to_insert_2 );

    container_block.appendChild( block_to_insert_1 );
}