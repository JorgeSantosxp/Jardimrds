$(function() {

    const token = "IGQVJVZAWFIMHVuYlRvWHlsbTlhc24xSFl1dWlfM0xjVHp3aVh6eTd2dzlkblI0NHZAqaUIwY1ozcDE4d2MyM1ZATQld5dWFmYXZAULU9tbUwtSUR1MjQtemVsakU0NWFCQ3JraV9uOC0tczZApMTVJNml4ZAwZDZD"
    const url = "https://graph.instagram.com/me/media?access_token="+token+"&fields=media_url,media_type,caption,permalink";

    $.get(url).then(function(response) {
        //console.log('retorno: ',response.data);
        let dadosJson = response.data
        let conteudo = '<div class="row" style="padding-left:0px">' ;

        for (let p = 0; p <dadosJson.length; p++){
            let feed = dadosJson[p];
            let titulo = feed.caption !== null ? feed.caption : '';
            let tipo = feed.media_type;
            if(tipo === 'VIDEO'){
                conteudo += '<div class="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xx1-3"><video style="width:100%;height:80%;" controls><source src="'+feed.media_url+'" type="video/mp4"></video></div>';
            }
            else if(tipo === 'IMAGE'){
                conteudo += '<div class="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 col-xx1-3"><img style="width:100%;height:80%" title="'+titulo+'" alt="'+titulo+'" src="'+feed.media_url+'" onclick="window.open(\''+ feed.permalink + '\');"></div>';
            } 

        }
        conteudo += '</div>';
        $('#insta').html(conteudo);
    })

});