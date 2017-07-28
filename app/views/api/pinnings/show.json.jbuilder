
json.pin do
  json.set! :owner_image_url, @pin.owner.image_url
  json.set! :owner_username, @pin.owner.username
  json.extract! @pin, :id, :title, :description, :url, :image_url, :user_id

  json.pinned_boards do
    @pin.boards.each do |board|
      json.set! board.id, board.id
    end
  end
end

json.board do
  json.set! :owner_image_url, @board.owner.image_url
  json.set! :owner_username, @board.owner.username
  json.extract! @board, :id, :title, :description, :user_id

  json.pins do
    @board.pins.each do |pin|
      json.set! pin.id do
        json.partial! 'api/pins/pin.json.jbuilder', pin: pin
      end
    end
  end
end
