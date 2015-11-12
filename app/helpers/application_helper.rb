module ApplicationHelper
	def error_messages_for(resource)
		render partial: "shared/error_messages", locals: {
			resource: resource
		}
	end

	def notice_alert_messages_for
		render partial: "shared/notice_alert_messages"
	end

	def select_book_and_users(form_builder, books, users)
		render partial: 'shared/select_book_and_users', locals: {
			f: form_builder,
			books: books,
			users: users
		}
	end
end
