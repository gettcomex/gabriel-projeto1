class LoanMailer < ActionMailer::Base
	default from: "gtk.library.system@gmail.com"

	def notification(loan)
		@loan = loan
		mail to: loan.user.email, subject: create_subject_from(loan)
	end

	def create_subject_from(loan)
		"Empréstimo do livro #{loan.book.title} efetuado com sucesso."
	end
end
