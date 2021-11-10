/*******************************************************************************
* Author: Jonathan Calzada
* Purpose: OPEN ANY MODAL VIA LINK w/ # e.g.  jonathan.jcboom.com#portfolioModal1
* Date: 5/25/2017
*******************************************************************************/
/* BEGIN: FUNCTION */
$(document).ready(function() {
  var modals = ['#portfolioModal1', '#portfolioModal2', '#portfolioModal3', '#portfolioModal4', '#portfolioModal5', '#portfolioModal6','#portfolioModal7']; //need to be dynamic Jonathan Calzada
  if (window.location.hash && ~modals.indexOf(window.location.hash)) {
    var htmlContent = $('*[data-target="'+window.location.hash+'"]').attr("href");
    var modalHash = window.location.hash;

    if (htmlContent) {
      // $(window.location.hash).modal('show').find('.modal-content').load(htmlContent); ///Loads modal///
      loadModal(modalHash, htmlContent);
    }
  }
  /// Updates URL to include #porfolioModal# when opening cards ///
  $(".jcboom-project-item").click(function(){
    location.hash=$(this).attr("data-target");
  });

  //loads all Modals ///
  function loadModal(modalHash, htmlContent) {
    $(modalHash).modal('show').find('.modal-content').load(htmlContent);
  }
})
/* END FUCNTION */
