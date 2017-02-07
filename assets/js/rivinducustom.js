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
    hideAllPubs();
    
    var divsToShow = document.getElementsByClassName("dissertationpub");

    for(var i = 0; i < divsToShow.length; i++)
    {
		divsToShow[i].style.display = 'block';
    }
}

function showOnlyConferencePapers()
{
    hideAllPubs();
    
    var divsToShow = document.getElementsByClassName("conferencepub");

    for(var i = 0; i < divsToShow.length; i++)
    {
		divsToShow[i].style.display = 'block';
    }
    
}

function showOnlyJournalPapers()
{
    hideAllPubs();
    
    var divsToShow = document.getElementsByClassName("journalpub");

    for(var i = 0; i < divsToShow.length; i++)
    {
		divsToShow[i].style.display = 'block';
    }
    
}

function showOnlyTechnicalReports()
{
    hideAllPubs();
    
    var divsToShow = document.getElementsByClassName("technicalreportpub");

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

