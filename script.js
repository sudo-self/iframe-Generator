
function generateIframe() {
	var _ytbAttr = $('#ytbAttr[type="checkbox"]'),
		_args = '';
	
	if(_ytbAttr.is(':checked')) {
		_args = 'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen';
	}
	
	var _url = $('#url'),
		_size = $('[type="radio"]:checked'),
		_css = $('#css'),
		_proportions = $('#proportions'),
		_iframe = $('<iframe border="0" loading="lazy" ' + _args + ' />'),
		_container = $('<div class="iframe-container" />'),
		_html = $('#html'),
		_preview = $('#preview'),
		_style = $('#style');
	

	var _rel = _size.val().split('x');
	_rel = (100 * _rel[1]) / _rel[0];
	_proportions.html(_rel);
	

	_iframe.attr('src', _url.val());
	_container.html(_iframe);
	_html.text(_container.prop('outerHTML'));
	

	_preview.html(_container);
	
	_cleanStyle = _css.prop('innerHTML').replace(/(<([^>]+)>)/ig,"");
	_style.text(_cleanStyle);
}


$('input').change(function () {
  generateIframe();
});

generateIframe();

new ClipboardJS('.btn');