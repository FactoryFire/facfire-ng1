// Initialize Firebase
var config = {
  apiKey: "AIzaSyBCM5A9eHJp1bNmyk9OGGsiT6VrvqJBMeI",
  authDomain: "facfire-ae64e.firebaseapp.com",
  databaseURL: "https://facfire-ae64e.firebaseio.com",
  projectId: "facfire-ae64e",
  storageBucket: "facfire-ae64e.appspot.com",
  messagingSenderId: "133488604194"
};

// Angular APP Constants for it framework & useful on project
//'fac-fire.controllers', 'fac-fire.directives', 'fac-fire.factories', 
var FacFireModule = angular.module('fac-fire', ['fac-fire.services']);
FacFireModule
  .constant('PopupConst', {
    delay: 3000, //How long the popup message should show before disappearing (in milliseconds -> 3000 = 3 seconds).
    shotDelay: 1000,
    longDelay: 7000,
    successIcon: "ion-happy-outline",
    errorIcon: "ion-sad-outline",
    nothingTODOIcon: "ion-android-checkmark-circle",
    accountCreateSuccess: "Parabéns! Sua conta foi criada. Estamos te logando.",
    emailAlreadyExists: "Desculpe, mas uma conta com este e-mail já existe. Por favor cadastre-se com outro e-mail ou click em acessar ou recuperar senha.",
    accountAlreadyExists: "Desculpe, mas uma conta com esta credencial já existe. Por favor, verifique sua conta e tente novamente.",
    emailNotFound: "Desculpe, mas não encontramos a conta deste email. Por favor, verifique seu email.",
    userNotFound: "Desculpe, mas não encontramos o usuário desta conta. Por favor, verifique sua conta.",
    invalidEmail: "Desculpe, mas você informou um email inválido. Por favor, verifique seu email.",
    notAllowed: "Desculpe, mas o cadastramento não está liberado. Contate o suporte.",
    serviceDisabled: "Desculpe, mas este provedor de login está desabilitado. Por favor contate o suporte.",
    wrongPassword: "Desculpe, mas a senha informada está incorreta. Por favor, verifique sua senha e tente novamente.",
    accountDisabled: "Desculpe, mas sua conta está desabilitada. Por favor, contate o suporte.",
    weakPassword: "Atenção, a senha digitada é fraca. Por favor, informe uma senha forte.",
    errorRegister: "Desculpe, mas nós encontramos um erro no seu cadastro. Por favor, tente novamente.",
    passwordReset: "Link de recuperação de senha enviado para: ",
    errorPasswordReset: "Desculpe, ocorreu um erro ao enviar o link para seu e-mail. Por favor, tente novamente.",
    errorLogout: "Desculpe, encontramos um erro ao te deslogar. Por favor, tente mais tarde.",
    sessionExpired: "Desculpe, mas sua sessão expirou. Por favor, acesse novamente.",
    errorLogin: "Desculpe, encontramos um erro no seu acesso (login). Por favor tente novamente mais tarde.",
    welcomeBack: "Bem-vindo de volta! Parece que você já está logado, preenchendo sua sessão...",
    authInternalError: "Contate o suporte e informe que a chave de acesso expirou.",
    manyRequests: "Desculpe, mas nós ainda estamos processando seu acesso anterior. Tente novamente mais tarde.",
    fullVersionOnly: "Desculpe, mas você não tem acesso à esta função.",
    invalidForm: 'Preencha o formulário corretamente',
    successAdd: 'Cadastrado com Sucesso',
    successRemove: 'Excluído com Sucesso',
    offline: 'Verifique sua conexão com a internet (Wi-Fi ou rede de dados) e tente novamente.',
    geoLocTimeOut: 'Não conseguimos descobrir sua localização. Habilite sua conexão com a internet e o GPS',
    signNeeded: 'Ficamos felizes com seu interesse em ir além. Cadastre-se para continuar',
    alreadyAdd: 'Estes dados já foram cadastrados anteriormente, nada foi alterado.',
    alreadyMsg: 'já cadastrado(a)',
    contactSupport: 'Ops, algo deu errado. Por favor entre em contato com o supporte e informe o erro: '
  })
  .constant('AndroidIntents', {
    ACTION_INSERT: 'android.intent.action.INSERT',
    CONTACTS_CONTRACT: {
      CONTENT_TYPE: 'vnd.android.cursor.dir/contact'
    }

  })
  .constant('ChargeStatus', {
    created: 0,
    processing: 1,
    authenticated: 2,
    not_authenticated: 3,
    authorized: 4,
    not_authorized: 5,
    charged: 6,
    canceled: 9,
    authenticating: 10,
    canceling: 12
  });

// var FacFireControllers = angular.module('fac-fire.controllers', ['ionic', 'firebase']);
// var FacFireDirectives = angular.module('fac-fire.directives', ['ionic', 'firebase']);
// var FacFireFactories = angular.module('fac-fire.factories', ['ionic', 'firebase']);
// var FacFireServices = angular.module('fac-fire.services', ['ionic', 'firebase']);


angular.module('fac-fire.services', [])
  .service('FFPopup', function(PopupConst) {

    var Popups = {
      show: function() {
        // $ionicLoading.show({
        //   template: '<ion-spinner icon="android"></ion-spinner>'
        // });

        alert(PopupConst.accountAlreadyExists);
      }
      // ,
      // hideModal: function() {
      //   return $ionicLoading.hide();
      // },
      // loading: function(msg) {
      //   // if(loadingShown()) return;
      //   if(!msg) msg = 'Sincronizando...';
      //   promise = $ionicLoading.show({
      //     template: '<ion-spinner icon="android"></ion-spinner> <br>' + msg
      //   });
      //
      //   return promise;
      // },
      // loadingShown: loadingShown,
      // message: function(icon, message) {
      //   var delay;
      //   if(message.length <= 35) delay = Popup.shotDelay;
      //   if(message.length >= 80) delay = Popup.longDelay;
      //   else delay = Popup.delay;
      //
      //   $ionicLoading.show({
      //     template: '<div class="message-popup" onclick="hideMessage()"><h1><i class="icon ' + icon + '"></i></h1><p>' + message + '</p></div>',
      //     scope: this
      //   });
      //   promise = $timeout(function() {
      //     $ionicLoading.hide();
      //   }, delay);
      //   return promise;
      // },
      // offlineMessage: function(msg) {
      //   if(!msg) msg = 'Não foi possível conectar ao servidor. ' + Popup.offline;
      //   this.message(Popup.errorIcon, msg);
      // },
      // backErrorMsg: function(error) {
      //   var errorMsg;
      //
      //   if(typeof error.data == 'string') errorMsg = error.data;
      //   else errorMsg = error.data.msg;
      //
      //   if(errorMsg.length > 20) errorMsg = errorMsg.substr(0, 35);
      //
      //   Popups.message(Popup.errorIcon, Popup.contactSupport + error.status + ' - ' + errorMsg);
      // }
    };
    
    return Popups;
    
  });