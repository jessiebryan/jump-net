function FindProxyForURL(url, host)
{
    url = url.toLowerCase();
    host = host.toLowerCase();
    
    // whole site
    var site_list = [
        ,'192.168.0.81'
        ,'192.168.0.82'
        ,'192.168.0.93'
        ,'192.168.0.94'
        ,'207.154.105.93'
    ];
    
    var exp_list = [ ];

    for(var index = 0;index<site_list.length;index++){
         if(host==site_list[index] ||
             shExpMatch(host, "*." + site_list[index])){
            return "SOCKS5 127.0.0.1:2001";
         }
    }
    for(var index = 0;index<exp_list.length;index++){
        var re = new RegExp(exp_list[index]);
        if(url.match(re)){
            return "SOCKS5 127.0.0.1:2001";
        }
    }
    return "DIRECT";
}
