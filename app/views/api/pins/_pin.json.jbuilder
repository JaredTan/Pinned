json.set! :owner_image_url, pin.owner.image_url
json.set! :owner_username, pin.owner.username
json.extract! pin, :id, :title, :description, :url, :image_url, :user_id
