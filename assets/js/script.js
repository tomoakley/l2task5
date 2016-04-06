$(function() {
  var idList = new Array();
  var duplicate;
  $.getJSON("./assets/js/references.json", function(data) {
    $(".citation").each(function() {
      duplicate = false;
      var type = $(this).attr("data-ref-type");
      var id = $(this).attr("data-ref-id");
      idList.push(id);
      for (i = 0; i < idList.length-1; i++) {
        if (idList[i] == id) {
          duplicate = true;
        }
      } // this code adds the latest id to the array, and then checks everything but the last entry for the current id and if it finds one, marks it as a duplicate
      var r = data[type][id];
      var reference = addReference(r, type, id, duplicate); 
      if (reference) {
        $(".ref-list").append("<li data-ref-id=" + id + ">" + reference + "</li>");
      }
    });

    if (idList.length == 0) {
      $(".references").remove();
    } // remove the references element - otherwise a header appears with no references and looks stupid

    // this section is for the appendix page - get all the references, regardless of ID and list them
    var types = ["website", "book", "journal"];
    for (i = 0; i < types.length; i++) {
      var type = types[i];
      $.each(data[type], function(k, v) {
        var reference = addReference(v, type, 0, false);
        $(".appendix .bibliography-list").append("<li>" + reference + "</li>");
      });
    }
  });
  
  /* function addReference - returns a new reference string
   * Inputs: data (JSON object) - the JSON data object to create the reference from
   *         type (String) - the type of the reference. Existing types are website, book and journal
   *         id (int) - the ID of the element, to add a citation in the text (only works if id > 0)
   *         duplicate (boolean) - if the reference is already in the list, don't re-add it. This is worked out above.
   */
  function addReference(data, type, id, duplicate) {
    var authors = new Array();
    var surnames = new Array();
    $.each(data.authors, function(key, value) {
      var string = value.surname;
      surnames.push(string);
      if (value.initials != undefined) {
        string += ", " + value.initials;
      }
      authors.push(string);
    });
    var authorString = authors.join(", ");
    var surnameString = surnames.join(", ");
    var date = " (" + data.published.year + ") ";
    var title = "<em>" + data.title + "</em>";
    if (id > 0) {
      var citation = "(" + surnameString + ", " + data.published.year + ")";
      $(".citation[data-ref-id=" + id + "]").text(citation);
    }
    if (!duplicate) {
      if (type == "book") {
        var refString =  authorString + date + title + ". " + data.edition + " ed. " + data.location + ": " + data.publisher; 
      } else if (type == "website") {
        var refString = authorString + date + title + ". Available at: " + data.url + " (Accessed: " + + data.accessed.date + " " + data.accessed.month + " " + data.accessed.year + ").";
      } else if (type == "journal") {
        var refString = authorString + date + title + ", " + data.journal + ", " + data.volume + "(" + data.issue + "), pp. " + data.pageRange;
        if (data.doi != undefined) {
          refString += ". doi: " + data.doi + "."
        } else {
          refString += ".";
        }
      }
    } return refString;
    return false;
  }

});
