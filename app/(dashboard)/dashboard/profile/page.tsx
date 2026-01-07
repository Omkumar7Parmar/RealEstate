import PageHero from "@/components/PageHero";

export default function ProfilePage() {
  return (
    <>
      <PageHero title="Profile Settings" subtitle="Manage your account" />
      <section className="max-w-4xl mx-auto py-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-6">Personal Information</h3>
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="px-4 py-2 border rounded-lg" />
                <input type="text" placeholder="Last Name" className="px-4 py-2 border rounded-lg" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Contact Information</h3>
              <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg mb-4" />
              <input type="tel" placeholder="Phone" className="w-full px-4 py-2 border rounded-lg" />
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Password</h3>
              <input type="password" placeholder="Current Password" className="w-full px-4 py-2 border rounded-lg mb-4" />
              <input type="password" placeholder="New Password" className="w-full px-4 py-2 border rounded-lg mb-4" />
              <input type="password" placeholder="Confirm Password" className="w-full px-4 py-2 border rounded-lg" />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
            >
              Save Changes
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
