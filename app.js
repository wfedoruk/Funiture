
$(function() {

    let matrix = [

        [149, 148, 147, 146, 145, 144],
        [139, 137, 135, 134, 132, 130],
        [129, 128, 127, 125, 123, 121],
        [119, 118, 117, 115, 113, 111],
        [109, 108, 107, 105, 103, 101],
        [99,  98,  97,  95,  93,  91],
        [89,  88,  87,  85,  83,  81],

    ];

    let prodColor;
    let prodSize;
    let totalCost;
    let inputQuantity = 1;

    function getCost(){

        if (prodColor && prodSize >=0){
           totalCost = (matrix[prodColor] [prodSize])* inputQuantity;

           $('#totalProductprice').text(totalCost);


        }
   };

    $('input[name=color]').on('click', function() {

       prodColor = $(this).val();
        console.log(prodColor);

       getCost();

    });

    $('input[name=size]').on('click', function(){

       prodSize = $(this).val();

       getCost();

    });




    $("#inputQuantity").keyup(function(){

       inputQuantity = ($(this).val());

       getCost();



     });





       $(".addtobag_btn").on('click', function() {
		    $(".modal").css("display", "none" );

          let productArticle = $(".product_article span").text();

          let newProductData =
              {
              article: productArticle,
              color: prodColor,
              size: prodSize,
              quantity: inputQuantity,

              };

          let data = JSON.stringify(newProductData);   /*JSON*/
          console.log(data);


          if (prodColor && prodSize >=0){

                $.get("http://localhost/new/site.php", "data");              /*AJAX*/


          }


          $('input').prop('checked', false);
          $('#totalProductprice').text("0");
          $('#inputQuantity').val('1');
           inputQuantity = 1;
           prodSize = NaN;
           prodColor = NaN;

      });




        /* ================Modal=============== */
	
		$(".products_items").click(function(e){	
			e.preventDefault();
			$(".modal").slideToggle("slow" );  
	 });	


//        /*================Pop-up================*/
//
//         $(".product_save").click(function(){
//
//            let params = `width=600, height=600, left=0, top=0`;
//
//            open('https://wfedoruk.github.io/Mogo/', 'test', params);
//
//        });

        /*================Ajax================*/
         $("#mail").submit(function(e) {
         e.preventDefault()
         var formData = JSON.stringify($(this).serialize());

         console.log(formData);
         $.post('mail.php',formData);



         });


    /*================Slider================*/
		let ui;
	let min = 60;
	let max = 200;

        $( "#slider-range" ).slider({

          min: 60,
          max: 300,
          values: [ 60, 200 ],
          animate: "slow",
          range: true,
          slide: function( event, ui ) {
             $( "#amount1" ).val( ui.values[ 0 ] );
             $( "#amount2" ).val( ui.values[ 1 ] );
			  
		 min = $( "#slider-range" ).slider( "values", 0 );

		 max = $( "#slider-range" ).slider( "values", 1 )
			  
		        }
        });
	
	
	
	
        $( "#amount1" ).val($( "#slider-range" ).slider( "values", 0 ));
        $( "#amount2" ).val($( "#slider-range" ).slider( "values", 1 ));
	
		
		      	
				
	 $(".filter_icons button").click(function(e){
		 e.preventDefault();
		 console.log(min);
		 console.log(max);
		 let Items = $.makeArray($(".items_cost span"));
    
       
            for (let i = 0; i <Items.length; i++) {
				
				
			
				
				if (  $(Items[i]).text() <  max && $(Items[i]).text() >  min) {
					console.log($(Items[i]).text());
			
                 
				$(Items[i]).parent().parent()
                    .css("display", "block");
				}
					
				else{
					$(Items[i]).parent().parent()
                    .css("display", "none");
				}

            }

		 });

//    /*==============Slick -slider===================*/
	
	$(".posts").slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	});
//
//
//
//         $("[data-slider]").slick({
//          slidesToShow: 1,
//          slidesToScroll: 1,
//          arrows: false,
//          fade: true,
//          button: false,
//          infinite: true,
//          asNavFor: "[slider-nav]"
//        });
//
//        $("[slider-nav]").slick({
//          slidesToShow: 5,
//          slidesToScroll: 1,
//
//          dots: false,
//          centerMode: false,
//          focusOnSelect: true,
//          button: false,
//          vertical: true,
//          arrows: true,
//          asNavFor: "[data-slider]",
//          infinite: true,
//            responsive: [
//        {
//          breakpoint: 737,
//          settings: {
//            vertical: false,
//            verticalSwiping: false,
//            slidesToShow: 4
//          }
//        }
//    ]
//
//        });
//
//
   let navs = $(".header_nav");
 
   let headerH = $(".header").innerHeight();

   let scrollPos = $(window).scrollTop();

	console.log(headerH);
	console.log(scrollPos);

    $(window).on("scroll load resize", function() {
        scrollPos = $(this).scrollTop();

        if( scrollPos > headerH ) {
            navs.addClass("fixed");
        } else {
            navs.removeClass("fixed");
        }


    });

/* ===========Accordeon================== */

    $(".siderbar_titles").click(function(){


        $(this).next().slideToggle("slow" );

    });




/* ====================Menu==================== */
/*         navToggle;*/
//    let nav = $("#nav_item");
//    let navMenu = $("#navMenu");
//
//    navMenu.on("click", function(event) {
//        event.preventDefault();
//
//        nav.toggleClass("show");

//    });

    $("#navMenu").click(function(){

        $("#nav_item").toggleClass("show");
    });

/* ===================Select Icon================== */
//    $(".select").clone().appendTo(".sort_two");


    $("#line").click(function(){
       
        $(".products_shop").css("width", "100%");
//		$(".products_shop").css({"display":"flex", "justify-content":"space-between"})
//		$(".items_list").css("display", "block");
//		$(".items_cost").css("display", "none");
		
		   
    });



    $("#sqw").click(function(){
//		$(".products_shop").css("display", "block");
//		$(".items_list").css("display", "none");
//		$(".items_cost").css("display", "flex");

        let windowWidth = $(window).innerWidth();

        if (windowWidth > 1024)                                  {$(".products_shop").css("width", "33.33333%");}

        else if (windowWidth > 766)
            {$(".products_shop").css("width", "50%");}

        else
            {$(".products_shop").css("width", "100%");}

        
    });

    /*=================Select========================*/

    $("select").on("change", function(){

        let select = $(this).val();
       // select = $('select option:selected').text();

        select =
        (select == "price") ? arItems = $.makeArray($(".items_cost span")) :
        (select == "name") ? arItems = $.makeArray($(".items_text h4")) :
        arItems = NaN;
		
		console.log(arItems);

        arItems.sort(function(a, b) {
                return $(a).text() > $(b).text() ? 1 : -1;
            });

            for (let i = 0; i < arItems.length; i++) {

                 $(arItems[i]).parent().parent()
                    .css("order", i+1);

            }
    });
	


});
