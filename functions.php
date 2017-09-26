<?php

add_action('wp_enqueue_scripts', 'enqueue_styles', 9);

function enqueue_styles() {
wp_enqueue_style( 'my_style', get_template_directory_uri() . '/style.css', array(), false, all);
}

function my_scripts_method(){
wp_enqueue_script( 'newscript', get_template_directory_uri() . '/js/script.js', array(), false, all);
}

?>