defmodule Project2.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :display_name, :string
    field :email, :string
    field :password_hash, :string
    field :points, :integer
    field :hometown, :string
    field :pw_last_try, :utc_datetime
    has_many :friends, Project2.Users.User
    has_many :posts, Project2.Posts.Post

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :display_name, :password_hash, :points, :hometown, :pw_last_try])
    |> validate_required([:email, :display_name, :password_hash, :points, :hometown, :pw_last_try])
    |> unique_constraint(:email)
  end
end