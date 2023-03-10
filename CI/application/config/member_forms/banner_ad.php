<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

// FORM FIELDS FOR USERS ADMIN FORM

$config['form_banner_ad'] = array(
    'table'  => 'banner',
    'fields' => array(
        array(
            'label'      => 'Reference Name',
            'field_name' => 'name',
            'type'       => 'text',
            'value'      => '',
            'maxlength'  => '50',
            'size'       => '35',

            'required'   => TRUE,
            'rule'       => 'trim|xss_clean|required',
            'tip' => 'This field is used for your reference in charts and graphs. Keep it short for best display.'
        ),
        array(
            'label'      => 'Target URL',
            'field_name' => 'target_url',
            'type'       => 'text',
            'value'      => '',
            'maxlength'  => '100',
            'size'       => '40',
            'required'   => TRUE,
            'rule'       => 'trim|xss_clean|required|callback_valid_url',
            'tip'        => 'Enter your affiliate link to the program website.'
        ),
        array(
            'field_name'       => 'size',
            'label' =>'Size',
            'value'       => '125x125',
            'type'        => 'select',
            'select_list' => 'banner_size_list'
        ),
        array(
            'label'      => 'Banner URL',
            'field_name' => 'image_url',
            'type'       => 'text',
            'value'      => '',
            'maxlength'  => '255',
            'size'       => '40',
            'required'   => TRUE,
            'rule'       => 'trim|xss_clean|required|callback_valid_image_url',
            'tip'        => 'Enter the link to the banner. Go to the banner, right click, select "Copy Image Location", then paste here.'
        ),
        array(
            'label'      => 'Assign Credits',
            'field_name' => 'credits',
            'type'       => 'int',
            'value'      => '',
            'maxlength'  => '6',
            'size'       => '6',

            'rule'       => 'trim|xss_clean|is_numeric|callback_valid_credits',
        ),
    )
);
