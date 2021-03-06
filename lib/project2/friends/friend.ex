defmodule Project2.Friends.Friend do
  use Ecto.Schema
  import Ecto.Changeset

  schema "friends" do
    field :lower_user_id, :id
    field :higher_user_id, :id

    timestamps()
  end

  @doc false
  def changeset(friend, attrs) do
    friend
    |> cast(attrs, [:lower_user_id, :higher_user_id])
    |> validate_required([:lower_user_id, :higher_user_id])
  end
end
