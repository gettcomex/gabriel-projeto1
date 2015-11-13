class Ability
	include CanCan::Ability

	def initialize(user)

		user ||= User.new
		
		if user.is_employee
			can :manage, :all
		else
			can :manage, Loan, user_id: user.id
			can :renew, Loan, user_id: user.id

			can :manage, QueueOfBook, user_id: user.id

			can [:show, :update], User, id: user.id
		end
	end
end
