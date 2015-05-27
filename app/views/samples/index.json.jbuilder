json.array!(@samples) do |sample|
  json.extract! sample, :id, :name, :phone_number
  json.url sample_url(sample, format: :json)
end
