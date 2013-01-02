class StaticPagesController < ApplicationController
  def home
		@Presents = Present.all

		if signed_in?
			@user = current_user
		end
  end

  def help
  end
end
