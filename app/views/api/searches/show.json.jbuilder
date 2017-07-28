json.pins do
  json.array!(@search_results[:pins]) do |pin|
    json.id pin.id
    json.title pin.title
    json.description pin.description
    json.image_url pin.image_url
    json.user_id pin.user_id
  end
end

json.boards do
  json.array!(@search_results[:boards]) do |board|
    json.id board.id
    json.title board.title
    json.description board.description
    json.user_id board.user_id
  end
end

json.users do
  json.array!(@search_results[:users]) do |user|
    json.id user.id
    json.username user.username
    json.description user.description
    json.image_url user.image_url
  end
end
