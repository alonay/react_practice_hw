class PlayersController < ApplicationController
  before_action :set_player, only: [:show, :update, :destroy]
  # GET /players
  def index
    @players = Player.all
    render json: @players
  end

  # GET players/1
  def show
    render json: @player
  end

  # POST /player
  def create
    @player = Player.new(player_params)
    if @player.save
      render json: @player,status: :created, player: @player
    else
      render json: @player.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /players/1
  def update
    @player = Player.find(params[:id])
    @player.update(player_params)
    if @player.save
      render json: @player
    else
      render json: @player.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @player.destroy
  end

  private
  def set_player
    @player = Player.find(params[:id])
  end

  def player_params
    params.require(:player).permit(:name, :number, :position)
  end

end
