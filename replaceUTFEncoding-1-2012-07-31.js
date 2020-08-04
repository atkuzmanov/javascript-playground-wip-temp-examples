fixText: function(strEntry)
{
var strEncodedEntry = encodeURIComponent(strEntry);
var bFixed = false;
while(!bFixed)
{
var intPos = strEncodedEntry.search('%F');
if(intPos === -1) {
bFixed = true;
continue;
}
if(strEncodedEntry[intPos+2] >= '0' && strEncodedEntry[intPos+2] <= '8')
{
strEncodedEntry = strEncodedEntry.substring(0,intPos)+'%EF%BF%BD'+strEncodedEntry.substring(intPos+12,strEncodedEntry.length); 
}
else if(strEncodedEntry[intPos+2] > '8' && strEncodedEntry[intPos+2] <= 'B')
{
strEncodedEntry = strEncodedEntry.substring(0,intPos)+'%EF%BF%BD'+strEncodedEntry.substring(intPos+15,strEncodedEntry.length); 
}
}
var strEntryFixed = decodeURIComponent(strEncodedEntry);
strEntryFixed = strEntryFixed.replace(/\|/,'').trim(strEntryFixed).replace(/[\s]{2,}/gi,' ');
return strEntryFixed;
}

