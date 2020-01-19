<!--

// Netscape support functions

function NS_getVersion()
{
	return this.Cult3D.getVersion();
}

function NS_triggerEvent(name)
{
	return this.Cult3D.triggerEvent(name);
}

function NS_getLastMessage()
{
	return this.Cult3D.getLastMessage();
}

function NS_setAntiAliasing(aa_mode)
{
	this.Cult3D.setAntiAliasing(aa_mode);
}

function NS_getAntiAliasing()
{
	return this.Cult3D.getAntiAliasing();
}


function NS_setAntiAliasingDelay(aa_delay)
{
	this.Cult3D.setAntiAliasingDelay(aa_delay);
}

function NS_getAntiAliasingDelay()
{
	return this.Cult3D.getAntiAliasingDelay();
}

function NS_getFrame()
{
	return this.Cult3D.getFrame();
}


// Internet Explorer support functions

function IE_getVersion()
{
	return this.Cult3D.Version;
}

function IE_triggerEvent(name)
{
	return this.Cult3D.TriggerEvent(name);
}

function IE_getLastMessage()
{
	return this.Cult3D.LastMessage;
}

function IE_setAntiAliasing(aa_mode)
{
	this.Cult3D.AntiAliasing=aa_mode;
}

function IE_getAntiAliasing()
{
	return this.Cult3D.AntiAliasing;
}


function IE_setAntiAliasingDelay(aa_delay)
{
	this.Cult3D.AntiAliasingDelay=aa_delay;
}

function IE_getAntiAliasingDelay()
{
	return this.Cult3D.AntiAliasingDelay;
}

function IE_getFrame()
{
	return this.Cult3D.Frame;
}


// Dummy function

function None_Dummy()
{
}


// Same interface for both Internet Explorer and Netscape Communicator

function Cult3D_Object(name)
{
	if (typeof(this.Type)!="undefined")
		return this.Type;

	if (typeof(document.embeds[name])=="object")
	{
		this.Type="NS";
		this.Cult3D=document.embeds[name];
		this.triggerEvent=NS_triggerEvent;
		this.getVersion=NS_getVersion;
		this.getLastMessage=NS_getLastMessage;
		this.getAntiAliasing=NS_getAntiAliasing;
		this.getAntiAliasingDelay=NS_getAntiAliasingDelay;
		this.setAntiAliasing=NS_setAntiAliasing;
		this.setAntiAliasingDelay=NS_setAntiAliasingDelay;
		this.getFrame=NS_getFrame;
	}
	else if (typeof(eval(name))=="object" && typeof(eval(name).LastMessage)=="string")
	{
		this.Type="IE";
		this.Cult3D=eval(name);
		this.triggerEvent=IE_triggerEvent;
		this.getVersion=IE_getVersion;
		this.getLastMessage=IE_getLastMessage;
		this.getAntiAliasing=IE_getAntiAliasing;
		this.getAntiAliasingDelay=IE_getAntiAliasingDelay;
		this.setAntiAliasing=IE_setAntiAliasing;
		this.setAntiAliasingDelay=IE_setAntiAliasingDelay;
		this.getFrame=IE_getFrame;
	}
	else
	{
		this.Type="";
		this.Cult3D=null;
		this.getVersion=None_Dummy;
		this.getLastMessage=None_Dummy;
		this.getAntiAliasing=None_Dummy;
		this.getAntiAliasingDelay=None_Dummy;
		this.setAntiAliasing=None_Dummy;
		this.setAntiAliasingDelay=None_Dummy;
		this.getFrame=None_Dummy;
	}
}


function isIE()
{
	return navigator.appName.indexOf('Microsoft') != -1;
}

//-->
