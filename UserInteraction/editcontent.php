<?php require_once('header.html'); ?>
<div class="container">
    <div class="row">
        <div class="col-sm-6">
            <h1>HTML5 Editable Content</h1>                        
            <div class="span-6 dragItems" contenteditable="true" id="editableDiv" spellcheck="true">
                <p>This is a really great book. I am so glad I am reading it because.</p>
                <ul>
                    <li>It is witty</li>
                    <li>I am now well informed about HTNL5</li>
                    <li>The authors are all aroung great guys</li>
                </ul>
            </div>
        </div>
        <div class="col-sm-6"> 
            <h2>Instruction</h2>
            <p>Edit the content on the left column and it will stay the same even after you refresh the page. </p>
            <p>This is the work of the <strong>editable content</strong> in conjuction with <strong>local storage</strong>. </p>
            
        </div>
    </div>
</div>
<?php 
    $scriptTag = '<script src="js/edit.js"></script>'; 
    require_once('footer.html'); 
?>