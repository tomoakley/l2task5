jQuery(document).on("ready", function() {
  $.getJSON("references.json", function(data) {
    $(".citation").each(function() {
      var type = $(this).attr("data-ref-type");
      var id = $(this).attr("data-ref-id");
      var r = data[type][id];
      $(this).text("(" + r.lastName + ", " + r.year + ")");
      if (type == "book") {
        var refString = r.lastName + ", " + r.initials  + " (" + r.year + ") " + r.title  + " " + r.edition + " ed. " + r.location + ": " + r.publisher; 
      } else if (type == "website") {
        var refString = r.lastName + ", " + r.initials + " (" + r.year + ") <em>" + r.title + "</em>. Available at: " + r.url + " (Accessed: " + r.accessed + ").";
      }
      $(".references").append("<p>" + refString + "</p>");
    });
  });
});
