function showAllPubs() 
{ 
	var divsToShow = document.getElementsByClassName('allpub'),i;

    for(var i = 0; i < divsToShow.length; i++)
    {
		divsToShow[i].style.display = 'block';
    }
}

function hideAllPubs()
{
    var divsToShow = document.getElementsByClassName('allpub'),i;

    for(var i = 0; i < divsToShow.length; i++)
    {
		divsToShow[i].style.display = 'none';
    }
}

function showOnlyDissertations()
{
    /*
	showAllPubs();
	var divsToHide = document.getElementsByClassName('conferencepub'),i;

    for(var i = 0; i < divsToHide.length; i++)
    {
		divsToHide[i].style.display = 'none';
    }
    */
    
    hideAllPubs();
    
    var divsToShow = document.getElementsByClassName("dissertationpub");

    for(var i = 0; i < divsToShow.length; i++)
    {
		divsToShow[i].style.display = 'block';
    }
	
	
}

function showOnlyConferencePapers()
{
    /*
	showAllPubs();
	
	var divsToHide = document.getElementsByClassName("dissertationpub");

    for(var i = 0; i < divsToHide.length; i++)
    {
		divsToHide[i].style.display = 'none';
    }
	*/
    
    hideAllPubs();
    
    var divsToShow = document.getElementsByClassName("conferencepub");

    for(var i = 0; i < divsToShow.length; i++)
    {
		divsToShow[i].style.display = 'block';
    }
    
}

function filterByYear(yearnum)
{
    hideAllPubs();
    
    var divsToShow = document.getElementsByClassName(""+yearnum+"");

    for(var i = 0; i < divsToShow.length; i++)
    {
		divsToShow[i].style.display = 'block';
    }
}