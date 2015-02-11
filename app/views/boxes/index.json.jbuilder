json.array!(@boxes) do |box|
  json.extract! box, :id, :title, :description
  json.url box_url(box, format: :json)
end
