var data = {
	dafaultLanguage: 'en',
	dictionary:{
		en: {
			name: "Your name",
			namePlaceholder: "Input your name",
			gender: "Choose your gender",
			genderMale: "Male",
			genderFemele: "Female",
			countryWrapper: "Chose your country of residence",
			contries:{
				ua: "Ukraina",
				fr: "Franse",
				us: "United States",
				br: "Brasilia",
			},
			isShowBornCountry: "The country you were born and the country  where you live coincide",
			bornContryWrapper: "Choose your homeland",
			email: "Enter your email",
			emailPlaaceholder: "Enter your email",
			butonText: "To send"

		},
		ua: {
			name: "Ваше имя",
			namePlaceholder: "",
			gender: "",
			genderMale: "",
			genderFemele: "",
			countryWrapper: "",
			contries:{
				ua: "",
				fr: "",
				us: "",
				br: "",
			},
			isShowBornCountry: "",
			bornContryWrapper: "",
			email: "",
			emailPlaaceholder: "",
			butonText: ""

		}
	}
}

$(".language-image").click(function(event) {
	$(".language-image").removeClass('active')
	$(this).addClass('active')
	currentLanguage = $(this).attr('data-lang');
	setFormValue();
});

function setFormValue () {
	var dict = data.dictionary[currentLanguage];
	$("#name .description").text(dict.name)
	$("#name input").attr('placeholder', dict.namePlaceholder)
	$("#gender .description").text(dict.genderFemele)
	$("#male").text(dict.genderMale)

}
var currentLanguage = data.dafaultLanguage;
$(`.language-image[data-lang = ${currentLanguage}]`).addClass('active')
setFormValue();




//<input type="password">
//<button>Show password</button>
//<script>
//		$("button").click(function(event) {
//			var type = $("input").attr('type');
//			$("input").attr('type', type ==='password' ? 'text' :)
//			});
//	</script>*/