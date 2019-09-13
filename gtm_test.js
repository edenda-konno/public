var rt_item="";
var tag_broadCastService = document.getElementById("MarketingInfo_broadCastService");
var tag_informationId = document.getElementById("MarketingInfo_informationId");
rt_broadCastService=tag_broadCastService.textContent;
rt_informationId = (tag_informationId != null)?tag_informationId.textContent:"";
rt_item=rt_broadCastService+"i"+rt_informationId;
(8<rt_item.length)?(Rtoaster.init("RTA-34a8-e0bc6ed6917a"),Rtoaster.item(rt_item)):Rtoaster.init("RTA-34a8-e0bc6ed6917a");
Rtoaster.track();
