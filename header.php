<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); ?>
</head>
	<body>
		<header class="main-header">
			<div class="container">
				<nav class="main-navigation">
			
                <?   if ( is_page('29') ) {
    
                       wp_nav_menu(array('menu' => 'main-nav-menu','container'=> "", 'menu_class' => '')); 
                }else {
                        wp_nav_menu(array('menu' => 'second-nav-menu','container'=> "", 'menu_class' => '')); 
                    }?>
                    
                    </nav>
                    
               <? if ( !(is_user_logged_in()) ) { ?>
                    <div class="user-block">
				<a href="#" class="login">Вход</a>
				</div>
               <? }
                
                else { ?>
                    <div class="user-block">
				<a class='login' href="<?php echo wp_logout_url('http://faimya'); ?>">Выход</a>
				</div>
                <?}?>
                   
                   
                   
        
                            
            </div> 
    </header>
		