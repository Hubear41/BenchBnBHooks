class UpdateUsers < ActiveRecord::Migration[5.2]
  change_table :users do |t|
    t.change :username, :string, null: false, unique: true
    t.change :session_token, :string, null: false, unique: true
    t.change :password_digest, :string, null: false, unique: true
  end
end
