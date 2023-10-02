const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context, info) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    //find person logged in
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
  //remove book
  
  removeBook: async (parent, { bookId }, context) => {
    if (context.book) {
      const book = await Book.findOneAndDelete({
        _id: bookId,
        bookAuthor: context.book.authors,
      });

      await book.findOneAndUpdate(
        { _id: context.book._id },
        { $pull: { books: book._id } }
      );
      return book;
    }
    throw AuthenticationError;
  },

  //add book
    saveBook: async (parent, { bookId }, context) => {
        if (context.book) {
        const book = await Book.create({
            bookId,
            bookAuthor: context.book.authors,
        });
    
        await book.findOneAndUpdate(
            { _id: context.book._id },
            { $pull: { books: book._id } }
        );
        return book;
        }
        throw AuthenticationError;
    },
};
