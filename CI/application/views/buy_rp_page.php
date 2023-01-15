<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
    <?php echo $buy_rpp['websitename']; ?>
     <?php echo $buy_rrpp['websitename']; ?>
    </title>

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/bootstrap/css/bootstrap.min.css'); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/bootstrap/css/animate.min.css'); ?>">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/bootstrap/css/calendar.css'); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/bootstrap/css/generics.css'); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/bootstrap/css/common.css'); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/bootstrap/css/member.css'); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/bootstrap/css/footer.css'); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/bootstrap/css/datepicker.css'); ?>">

        <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/styles/modal.css'); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('layout/member/assets/css/main.css'); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('layout/member/assets/css/custom.css'); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('layout/member/assets/css/jquery.countdown.css'); ?>">

<link rel="stylesheet" href="<?php echo base_url('custom/css/flipclock.css'); ?>" type="text/css" media="all" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<style type="text/css">
        .royaltypositionforsale
        {
            background-color: #72A230;
            padding-top: 5px;
    
        }
        .tab-content
        {
            padding:10px;
        }
    </style>

    <script type="text/javascript">
         $(document).ready(function(){

        $(".js-calc").keyup(function(){

            var val1 = parseFloat($("#amount_per_rp").val());
            var val2 = parseInt($("#numberofsharestobuy").val());

            if ( ! isNaN(val1) && ! isNaN(val2))
            {
                 $("#result").text(val1 * val2);
            }
        });

    });

    </script>

</head>
<body>


	<header>
    <div class="floatLeft p-l-15" id="logotype">
        <a href="/" title="Crypto Cogent" style="color:white;"><?php echo $buy_rpp['websitename']; ?>
            <?php echo $buy_rrpp['websitename']; ?>
        </a>
    </div>

    <div class="member">
    Welcome : <?php echo $marketplace['username']; ?>
    </div>
    <div class="statistics">
    Total Members: 
    </div>
    <div class="statistics">
    Balance: <?php echo $buy_rrpp['amountinusd']; ?> USD
    </div>

    <div id="notify">
        <i class="fa fa-bell-o" id="alertBell"></i>
        <span id="notify-msg"></span>
    </div>

    <div class="pull-right" style="padding-top:3px; margin-right:5px;">
        <div id="google_translate_element"></div>
        <script type="text/javascript">
            function googleTranslateElementInit() {
                new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
            }
        </script>
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    </div>
    <div class="clear"></div>
	</header>

	<div class="container-fluid" id="content">
		<div class="row">
			<div class="col-sm-3" id="left">
            	<h3 class="menu-header">Member tools</h3>
            	<?php include('partial/menu.php'); ?>
			</div>
            <div class="col-sm-8 col-md-8" style="margin-top: 20px;">
                <div class="col-sm-6 col-md-12 royaltypositionforsale">
                    <div class="col-sm-12 col-md-7">
                        <h4 style="color:#FFFFFF; font-weight:900;">Buy Royalty Positions</h4>
                    </div>
                    <div class="col-sm-6 col-md-5" style="margin-bottom: 5px;">
                        <a href="<?php echo base_url('marketplace'); ?>" class="btn btn-lg btn-info">Back To Shares</a>
                    </div>
                </div>


                <?php if($buy_rrpp['error_msg'] === '1'): ?>
                    <div class="alert alert-warning" style="margin-top: 50px;">
                        You Didn't Enter Correct Amount Of Royalty Position To Buy
                    </div>
                <?php endif; ?>

                <?php if($buy_rrpp['error_msg'] === '2'): ?>
                    <div class="alert alert-danger" style="margin-top: 50px;">
                        You Did Not Have Sufficient Amount To Buy
                    </div>
                <?php endif; ?>

                <?php if($buy_rrpp['completed'] === '1'): ?>
                    <div class="alert alert-success" style="margin-top: 50px">
                        You Have Successfully Purchased Royalty Positions
                    </div>
                <?php endif; ?>

                <?php if(isset($buy_rpp['Sellerusername'])): ?>

                <p style="font-size:16px">Use the form below to buy royalty Position. Funds Will be deducted from your account balance and held in escrow until the transfer is approved, at which time you will receive the royalty positions, and the seller will receive your funds</p>

                <p style="font-size:16px;"><?php echo $buy_rpp['Sellerusername']; ?> have <?php echo $buy_rpp['Total_Rp'] ?> to sell @ <?php echo $buy_rpp['Amount_Per_Rp'];?> each Royalty Position</p>

                <p style="font-size:16px;">Total Price Will Be <?php echo $buy_rpp['Total_Amount']; ?></p>
                    <div style="margin-top: 50px;">
                    <?php echo form_open('marketplace/buy_royalty_position'); ?>
                        <input type="hidden" name="totalamountofrp" value="<?php echo $buy_rpp['Total_Rp']; ?>">
                        <input type="hidden" name="amountperrp" value="<?php echo $buy_rpp['Amount_Per_Rp']; ?>" id="amount_per_rp" class="js-calc">
                        <input type="hidden" name="idforbuying" value="<?php echo $buy_rpp['idforbuy']; ?>">
                        <input type="hidden" name="idforseller" value="<?php echo $buy_rpp['Sellerusername']; ?>">
                        <div class="form-group">
                        <label for="amountofrptobuy">Enter Number Of Shares To Buy</label>
                            <input type="text" name="amountofrptobuy" class="form-control js-calc" id="numberofsharestobuy" required>
                        </div>
                         <p style="font-size:16px;">Amount To Pay: $ <span id="result"></span></p>
                        <div style="text-align: center;">
                        <input type="submit" name="submitamountofrptobuy" class="btn btn-lg btn-info">
                        </div>
                    <?php echo form_close(); ?>
                    
                   

                    </div>

                <?php endif; ?>

            </div>
        </div>
	</div>



<script src="<?php echo base_url('assets/bootstrap/js/jquery.min.js'); ?>"></script>
<script src="<?php echo base_url('assets/bootstrap/js/jquery-ui.min.js'); ?>"></script>
<script src="<?php echo base_url('assets/bootstrap/js/jquery.easing.1.3.js'); ?>"></script>
<script src="<?php echo base_url('assets/bootstrap/js/bootstrap.min.js'); ?>"></script>
<script src="<?php echo base_url('assets/bootstrap/js/toggler.min.js'); ?>"></script>
<script src="<?php echo base_url('assets/bootstrap/js/scroll.min.js'); ?>"></script>
<script src="<?php echo base_url('assets/bootstrap/js/datepicker.js'); ?>"></script>
<script src="<?php echo base_url('assets/scripts/tinynav.min.js'); ?>"></script>

<!-- Site functions -->
<script src="<?php echo base_url('assets/scripts/ajaxupload.js'); ?> "></script>
<script src="<?php echo base_url('assets/scripts/my_account.js'); ?>"></script>
<script src="<?php echo base_url('assets/scripts/forms.js'); ?>"></script>
<script src="<?php echo base_url('assets/scripts/modal.js'); ?>"></script>
<script src="<?php echo base_url('assets/scripts/getList.js'); ?>"></script>
<script src="<?php echo base_url('assets/scripts/tooltipsy.min.js'); ?>"></script>
<script src="<?php echo base_url('assets/scripts/sortable.js'); ?>"></script>

<script type="text/javascript" src="<?php echo base_url('layout/member/assets/js/jquery.plugin.min.js'); ?>"></script>
<script type="text/javascript" src="<?php echo base_url('layout/member/assets/js/jquery.countdown.min.js'); ?>"></script>
<script type="text/javascript">var mim = {
   baseUrl: 'http://www.cryptocogent.com/',
   assetPath: '/assets/',
   isGuest: false,
   isActive: false,
   launchtime: 0,
   alertInterval: 10000,
   alertCount: 0,
   teAlert: 'bell'
};
var currentDateTime = 0;</script>
<script type="text/javascript" src="<?php echo base_url('custom/js/flipclock.min.js'); ?>"></script>
<script type="text/javascript" src="<?php echo base_url('custom/js/my_flipclock.js'); ?>"></script>

<script src="<?php echo base_url('layout/member/assets/js/main.js'); ?>"></script>

<script src="<?php echo base_url('assets/bootstrap/js/functions.js'); ?>"></script>







</body>
</html>