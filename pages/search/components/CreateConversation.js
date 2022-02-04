export const CreateConversation = ({ onClose, tutor }) => {
	return (
		<div
			className="fixed z-10 inset-0 overflow-y-auto"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true"
		>
			<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<div
					className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
					aria-hidden="true"
				></div>

				<span
					className="hidden sm:inline-block sm:align-middle sm:h-screen"
					aria-hidden="true"
				>
					&#8203;
				</span>

				<div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all md:w-auto sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
					<div className="bg-white  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div className="mt-3 text-center sm:mt-0  sm:text-left w-full ">
							<h3
								className="text-lg leading-6 font-medium text-gray-900 border-b-2 mb-2 text-center"
								id="modal-title"
							>
								You can start conversation with {tutor}
							</h3>
							<p className="opacity-75 text-sm pb-2 w-4/5 text-center m-auto">
								Tell tutor about yourself and what do you expect from studying
							</p>
							<textarea className="rounded border resize-none w-full"></textarea>
							<div className="flex align-end">
								<button
									type="button"
									className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-purple-400 text-base font-medium text-gray-700 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
								>
									Send Message
								</button>
								<button
									type="button"
									className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
									onClick={onClose}
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
