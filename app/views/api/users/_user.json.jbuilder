json.extract! user, :id, :username, :description, :image_url


json.owned_pins do
  user.owned_pins.each do |pin|
    json.set! pin.id do
      json.partial! 'api/pins/pin.json.jbuilder', pin: pin
    end
  end
end

json.pinned_pins do
  user.pinned_pins.each do |pin|
    json.set! pin.id do
      json.partial! 'api/pins/pin.json.jbuilder', pin: pin
    end
  end
end

json.boards do
  user.boards.each do |board|
    json.set! board.id do
      json.partial! 'api/boards/board.json.jbuilder', board: board
    end
  end
end

json.followers do
  user.followers.each do |follower|
    json.set! follower.id do
      json.extract! follower, :id, :image_url, :username
    end
  end
end

json.followees do
  user.followees.each do |followee|
    json.set! followee.id do
      json.extract! followee, :id, :image_url, :username
    end
  end
end

if current_user
  if user.followers.exists?(id: current_user.id)
    json.followed true
  else
    json.followed false
  end
end
