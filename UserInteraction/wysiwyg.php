<?php require_once('header.html'); ?>
<div class="container">
    <div class="row">
        <div class="col-sm-12" style="text-align:center">
            <div class="col-sm-12">
                <h1>HTML5 Hacks, Editable Content</h1>    
                <h3>This is a really great book. I am glad I am reading it because:</h3>
                <ul>
                    <li>It is witty</li>
                    <li>I am now well informed about HTNL5</li>
                    <li>The authors are all aroung great guys</li>
                </ul>
                <h3>Use this button to make your entire document editable or turn it off:</h3>
                <button class="btn btn-success" id="makeEdit">toogle design mode</button>
                <h3>Use this button to show markup</h3>
                <button class="btn btn-warning" id="showMarkup">show my markup</button> 
            </div>
            <div class="col-sm-6">
                <textarea class="form-control" cols="2" rows="6" id="exportContent"></textarea>
            </div>
            <div class="col-sm-6">
                <img src="../assets/tochi.jpg" height="200"/>
            </div>
            
            
        </div>
    </div>
</div>
<?php
     $scriptTag = '<script src="js/wyg.js"></script>'; 
    require_once('footer.html'); 
?>