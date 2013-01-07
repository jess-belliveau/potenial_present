class StaticPagesController < ApplicationController
  def home
		@Presents = Present.all.reverse.take(20)

		if signed_in?
			@user = current_user
		end
  end

  def help
  end
end
