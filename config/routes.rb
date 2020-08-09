Rails.application.routes.draw do

  # 管理画面の設定
  namespace :admin do
    # ログイン画面
    get 'login',　action: :login, controller: 'top'
    # ログイン後のTopページ画面
    get 'top', action: :index, controller: 'top'
    # ユーザー一覧
    resources :staffs
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
